'use server';

import { prisma } from '@/lib/db';
import { currentUser } from '@clerk/nextjs/server';
import { Transaction } from '@/type/Transaction';

async function getTransactions(): Promise<{
  transactions?: Transaction[];
  error?: string;
}> {
  const user = await currentUser();

  if (!user) {
    return { error: 'User not found' };
  }

  // console.log("User:", user.id);

  try {
    const transactions = await prisma.transaction.findMany({
      where: { userId: user.id },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return { transactions };
  } catch (error) {
    return { error: 'Database error' };
  }
}

export default getTransactions;
