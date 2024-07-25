import css from "./TransactionHistoryItem.module.css";

const TransactionHistoryItem = props => {
    return (
        <tr>
            <td>{props.item.type}</td>
            <td>{props.item.amount}</td>
            <td>{props.item.currency}</td>
        </tr>
    );
};

export default TransactionHistoryItem;
