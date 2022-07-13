import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationBotton from "../NotificationButton";
import "./styles.css";

function SalesCard() {
  return (
    <div className="dsmeta-card">
      <h2>Vendas</h2>
      <div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            selected={new Date()}
            onChange={(date: Date) => {}}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            selected={new Date()}
            onChange={(date: Date) => {}}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>
      <div>
        <table className="dsmeta-sales-table">
          <thead>
            <tr>
              <th className="dsmta-breakpoint-large">Id</th>
              <th className="dsmta-breakpoint-small">Data</th>
              <th>Vendedor</th>
              <th className="dsmta-breakpoint-large">Visitas</th>
              <th className="dsmta-breakpoint-large">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="dsmta-breakpoint-large">#341</td>
              <td className="dsmta-breakpoint-small">08/07/2022</td>
              <td>Anakin</td>
              <td className="dsmta-breakpoint-large">15</td>
              <td className="dsmta-breakpoint-large">11</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationBotton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="dsmta-breakpoint-large">#341</td>
              <td className="dsmta-breakpoint-small">08/07/2022</td>
              <td>Anakin</td>
              <td className="dsmta-breakpoint-large">15</td>
              <td className="dsmta-breakpoint-large">11</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationBotton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="dsmta-breakpoint-large">#341</td>
              <td className="dsmta-breakpoint-small">08/07/2022</td>
              <td>Anakin</td>
              <td className="dsmta-breakpoint-large">15</td>
              <td className="dsmta-breakpoint-large">11</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationBotton />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SalesCard;
