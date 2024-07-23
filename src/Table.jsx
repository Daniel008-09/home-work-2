
 const Table = ({data}) => {
  return (
    <div className="table">
        {
                JSON.stringify(data) === "{}"
                    ? ''
                    : <table>
                        <tr>
                            <td>city</td>
                            <td>{data.name}</td>
                        </tr>
                        <tr>
                            <td>temp</td>
                            <td>{data.main.temp}</td>
                        </tr>
                        <tr>
                            <td>deck</td>
                            <td>{data.weather[0].description}</td>
                        </tr>
                    </table>
        }
    </div>
  )
}
export default Table;
