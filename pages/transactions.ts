import { Transaction } from '@/page/Transaction';
import { withTon } from '@/shared/ton/withTon';

const WrappedTransaction = withTon(Transaction);

export default WrappedTransaction;
