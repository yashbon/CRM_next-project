// export interface ActiveLabelProps {
//     children
// }

export const Status = {
  Active: 'active',
  NotActive: 'notActive',
  Pending: 'pending',
  Suspend: 'suspend',
};

const StatusLabel = ({ children, status }) => {
  return (
    <span
      className={`inline-flex items-center py-1 px-3.5 rounded-full text-sm font-medium 
    ${
      (status === Status.Active && 'text-green-700 bg-green-100') ||
      (status === Status.NotActive && 'text-red-700 bg-red-100') ||
      (status === Status.Pending && 'text-orange-700 bg-orange-100') ||
      (status === Status.Suspend && 'text-blue-700 bg-blue-100') ||
      ''
    }`}
    >
      <div className="w-1 h-1 mr-2 rounded-full bg-current" />
      {children}
    </span>
  );
};

export default StatusLabel;
