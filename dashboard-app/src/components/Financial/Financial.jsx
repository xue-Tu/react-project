import { iconsImgs } from "../../utils/images";
import "./Financial.css";

function Financial() {
  return <div className="subgrid-two-item grid-common grid-c8">
    <div className="grid-c-title">
      <h3 className="grid-c-title-text">Financial Advice</h3>
      <button className="grid-c-title-icon" type="button">
        <img src={iconsImgs.plus} alt="" />
      </button>
    </div>

    <div className="grid-c8-content">
      <p className="text text-sliver-v1">Ipsum dolor sit amet
      consertetur, adispiscing elit. Iste, vitae ...</p>
    </div>
  </div>;
}

export default Financial;
