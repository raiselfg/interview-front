export default function QuestionLayout({
  techSidebar,
  techQuestions,
}: {
  techSidebar: React.ReactNode;
  techQuestions: React.ReactNode;
}) {
  return (
    <div className="flex gap-12">
      <div>{techSidebar}</div>
      <div className="flex justify-center">{techQuestions}</div>
    </div>
  );
}
