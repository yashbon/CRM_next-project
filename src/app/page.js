import StatusLabel, { Status } from './components/status-lables';

// const Status = {
//   Active: 'active',
//   NotActive: 'notActive',
//   Pending: 'pending',
//   Suspend: 'suspend',
// };

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspend}>Suspend</StatusLabel>
    </main>
  );
}
