import data from "./data";


export default function card() {
  return (
      <div className="card-grid">
        {data.map((Dataa) => (
          <div className="card">
            <h2>{Dataa.name}</h2>
            <p>{Dataa.alamat}</p>
          </div>
        ))}
      </div>
  );
}

