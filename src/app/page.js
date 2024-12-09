import ActiveLabelProps from './components/active-lables';
import NotActiveLabelProps from './components/not-active-lables';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <ActiveLabelProps>Active</ActiveLabelProps>
      <NotActiveLabelProps>Not Active</NotActiveLabelProps>
    </main>
  );
}
