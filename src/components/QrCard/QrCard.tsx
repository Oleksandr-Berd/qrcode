import * as SC from "./QrCardStyled"

import qrCode from "../../assets/images/image-qr-code.png"

const QrCard:React.FC = () => {
    return (
      <SC.QrCardCustom>
        <SC.QrCardImgCon>
          <img src={qrCode} alt="qrCode" />
        </SC.QrCardImgCon>
        <h3>Improve your front-end skills by building projects</h3>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </SC.QrCardCustom>
    );
}
 
export default QrCard;