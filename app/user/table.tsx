import { currentUserStore } from "../store";

export default function Table() {
  const { current } = currentUserStore();
  const tableData = [
    { label: "First Name", value: current?.firstName ?? "Email" },
    { label: "Last Name", value: current?.lastName ?? "Email" },
    { label: "Email", value: current?.email ?? "Email" },
  ];

  return (
    <section className={`flex h-full items-center justify-center`}>
      <table className="border-collapse border border-slate-500">
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td className="border-theme5 border-2">{item.label}</td>
              <td className="border-theme5 border-2">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
