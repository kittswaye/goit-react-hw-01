import css from "./TransactionHistory.module.css";
import TransactionHistoryItem from '../TransactionHistoryItem/TransactionHistoryItem';

const TransactionHistory = props => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody className={css.border}>
                {props.items.map((item) => {
                    return (<TransactionHistoryItem item={item} key={item.id} />)
                })}
            </tbody>
        </table>
    );
};

export default TransactionHistory;
