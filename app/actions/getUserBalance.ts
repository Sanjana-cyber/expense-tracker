'use server';

import { prisma } from '@/lib/db';
import { currentUser } from '@clerk/nextjs/server';

async function getUserBalance(): Promise<{
  balance?: number;
  error?: string;
}> {
  const user = await currentUser();

  if (!user) {
    return { error: 'User not found' };
  }

  try {
    const transactions = await prisma.transaction.findMany({
      where: { userId: user.id },
    });

    const balance = transactions.length
      ? transactions.reduce((sum, t) => sum + t.amount, 0)
      : 0;

    return { balance };
  } catch (error) {
    return { error: 'Database error' };
  }
}

export default getUserBalance;
