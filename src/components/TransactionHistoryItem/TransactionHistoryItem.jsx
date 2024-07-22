import css from "./TransactionHistoryItem.module.css";

const TransactionHistoryItem = props => {
    return (
        <tr key={props.item.id}>
            <td>{props.item.type}</td>
            <td>{props.item.amount}</td>
            <td>{props.item.currency}</td>
        </tr>
    );
};

export default TransactionHistoryItem;
