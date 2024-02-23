import formatCurrency from "../../libs/formatCurrency";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface Account {
  balance: number;
  loan: number;
  loanPurpose: string;
}

function BalanceDisplay() {
  const account = useSelector<RootState, Account>((store) => store.account);
 

  return <div className="balance">{formatCurrency( account.balance)}</div>;
}

export default BalanceDisplay;
