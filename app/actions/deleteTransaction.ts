'use server';

import { prisma } from '@/lib/db';
import { currentUser } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';

async function deleteTransaction(
  transactionId: string
): Promise<{
  message?: string;
  error?: string;
}> {
  const user = await currentUser();

  if (!user) {
    return { error: 'User not found' };
  }
console.log("DELETE CALLED:", transactionId);

  try {
    await prisma.transaction.deleteMany({
      where: {
        id: transactionId,
        userId: user.id,
      },
    });

    revalidatePath('/');

    return { message: 'Transaction deleted' };
  } catch (error) {
    return { error: 'Database error' };
  }
}

export default deleteTransaction;
