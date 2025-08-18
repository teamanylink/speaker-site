import { useParams } from 'react-router-dom';

export default function StateSpeakerPageSimple() {
  const { state } = useParams();
  
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold">Speaker Page for {state}</h1>
      <p>This is a test page for state: {state}</p>
    </div>
  );
}
