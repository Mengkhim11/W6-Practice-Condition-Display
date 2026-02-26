export default function Statistic({ results }) {
const scores = results.map(student => student.score);

  const average =
    scores.reduce((sum, value) => sum + value, 0) / scores.length;

  const min = Math.min(...scores);
  const max = Math.max(...scores);

  return (
    <div className="statistics">
      <h3>Statistics</h3>
      <p>Average: {average.toFixed(2)}</p>
      <p>Min: {min}</p>
      <p>Max: {max}</p>
    </div>
  );
}
