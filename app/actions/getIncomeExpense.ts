'use server';

import { prisma } from '@/lib/db';
import { currentUser } from '@clerk/nextjs/server';

async function getIncomeExpense(): Promise<{
  income?: number;
  expense?: number;
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

    const amounts = transactions.map((t) => t.amount);

    const income = amounts
      .filter((item) => item > 0)
      .reduce((acc, item) => acc + item, 0);

    const expense = amounts
      .filter((item) => item < 0)
      .reduce((acc, item) => acc + item, 0);

    return {
      income: income || 0,
      expense: Math.abs(expense) || 0,
    };
  } catch (error) {
    return { error: 'Database error' };
  }
}

export default getIncomeExpense;
