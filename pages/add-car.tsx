import React, { SyntheticEvent } from "react";
import { Container } from "../components/styles/Container";
import { uuid } from "uuidv4";

import css from "../styles/add-car.module.css";
import BasicInput from "../components/styles/BasicInput";

export default function AddCar() {
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const id = uuid();
    const form = event.target as HTMLFormElement;
    const name = form[0] as HTMLInputElement;
    const subName = form[1] as HTMLInputElement;
    const price = form[2] as HTMLInputElement;
    const miles = form[3] as HTMLInputElement;
    const reg = form[4] as HTMLInputElement;
    const trans = form[5] as HTMLInputElement;
    const fuel = form[6] as HTMLInputElement;
    const seats = form[7] as HTMLInputElement;
    const engine = form[8] as HTMLInputElement;
    const bodyType = form[9] as HTMLInputElement;
    const exteriorColor = form[10] as HTMLInputElement;
    const driveType = form[11] as HTMLInputElement;
    const regNum = form[12] as HTMLInputElement;
    const previousOwner = form[13] as HTMLInputElement;
    const numOfKeys = form[14] as HTMLInputElement;
    const topSpeed = form[15] as HTMLInputElement;
    const acceleration = form[16] as HTMLInputElement;
    const power = form[17] as HTMLInputElement;
    const image1 = form[18] as HTMLInputElement;
    const image2 = form[19] as HTMLInputElement;
    const image3 = form[20] as HTMLInputElement;
    const image4 = form[21] as HTMLInputElement;
    const image5 = form[22] as HTMLInputElement;
    const image6 = form[23] as HTMLInputElement;
    const image7 = form[24] as HTMLInputElement;
    const image8 = form[25] as HTMLInputElement;
    const image9 = form[26] as HTMLInputElement;
    const image10 = form[27] as HTMLInputElement;
    const image11 = form[28] as HTMLInputElement;
    const image12 = form[29] as HTMLInputElement;
    const image13 = form[30] as HTMLInputElement;
    const image14 = form[31] as HTMLInputElement;
    const image15 = form[32] as HTMLInputElement;
    const image16 = form[33] as HTMLInputElement;
    const image17 = form[34] as HTMLInputElement;
    const image18 = form[35] as HTMLInputElement;
    const image19 = form[36] as HTMLInputElement;
    const image20 = form[37] as HTMLInputElement;
    const image21 = form[38] as HTMLInputElement;
    const image22 = form[39] as HTMLInputElement;
    const image23 = form[40] as HTMLInputElement;
    const image24 = form[41] as HTMLInputElement;
    const image25 = form[42] as HTMLInputElement;
    const image26 = form[43] as HTMLInputElement;
    const image27 = form[44] as HTMLInputElement;
    const image28 = form[45] as HTMLInputElement;
    const image29 = form[46] as HTMLInputElement;
    const image30 = form[47] as HTMLInputElement;
    const image31 = form[48] as HTMLInputElement;
    const image32 = form[49] as HTMLInputElement;
    const image33 = form[50] as HTMLInputElement;
    const image34 = form[51] as HTMLInputElement;
    const image35 = form[52] as HTMLInputElement;
    const image36 = form[53] as HTMLInputElement;
    const image37 = form[54] as HTMLInputElement;
    const image38 = form[55] as HTMLInputElement;
    const image39 = form[56] as HTMLInputElement;
    const image40 = form[57] as HTMLInputElement;

    const postData = {
      name: name.value,
      subName: subName.value,
      price: price.value,
      miles: miles.value,
      reg: reg.value,
      trans: trans.value,
      fuel: fuel.value,
      seats: seats.value,
      engine: engine.value,
      bodyType: bodyType.value,
      exteriorColour: exteriorColor.value,
      driveType: driveType.value,
      regNum: regNum.value,
      previousOwners: previousOwner.value,
      numOfKeys: numOfKeys.value,
      topSpeed: topSpeed.value,
      acceleration: acceleration.value,
      power: power.value,
      image: {
        image1: image1.value,
        image2: image2.value,
        image3: image3.value,
        image4: image4.value,
        image5: image5.value,
        image6: image6.value,
        image7: image7.value,
        image8: image8.value,
        image9: image9.value,
        image10: image10.value,
        image11: image11.value,
        image12: image12.value,
        image13: image13.value,
        image14: image14.value,
        image15: image15.value,
        image16: image16.value,
        image17: image17.value,
        image18: image18.value,
        image19: image19.value,
        image20: image20.value,
        image21: image21.value,
        image22: image22.value,
        image23: image23.value,
        image24: image24.value,
        image25: image25.value,
        image26: image26.value,
        image27: image27.value,
        image28: image28.value,
        image29: image29.value,
        image30: image30.value,
        image31: image31.value,
        image32: image32.value,
        image33: image33.value,
        image34: image34.value,
        image35: image35.value,
        image36: image36.value,
        image37: image37.value,
        image38: image38.value,
        image39: image39.value,
        image40: image40.value,
      },
    };
    fetch(`https://a-star-cars-backend.vercel.app/api/car/${id}`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(postData),
    }).then(() => form.reset());
  };
  return (
    <Container maxWidth="none">
      <Container background="primary" maxWidth="xl">
        <div onSubmit={(e) => handleSubmit(e)}>
          <form className={css.addCarForum}>
            <BasicInput type="text" placeholder="car name"></BasicInput>
            <BasicInput type="text" placeholder="car sub name"></BasicInput>
            <BasicInput type="text" placeholder="price"></BasicInput>
            <BasicInput type="text" placeholder="miles"></BasicInput>
            <BasicInput
              type="text"
              placeholder="registration year"
            ></BasicInput>
            <BasicInput
              type="text"
              placeholder="transition(manual/automatic)"
            ></BasicInput>
            <BasicInput
              type="text"
              placeholder="Fuel type(petrol/electric)"
            ></BasicInput>
            <BasicInput type="text" placeholder="seats"></BasicInput>
            <BasicInput
              type="text"
              placeholder="engine size(0 if electric)"
            ></BasicInput>
            <BasicInput type="text" placeholder="body type"></BasicInput>
            <BasicInput type="text" placeholder="exterior colour"></BasicInput>
            <BasicInput type="text" placeholder="drive type"></BasicInput>
            <BasicInput
              type="text"
              placeholder="registration number"
            ></BasicInput>
            <BasicInput
              type="text"
              placeholder="number of previous owners"
            ></BasicInput>
            <BasicInput type="text" placeholder="number of keys"></BasicInput>
            <BasicInput type="text" placeholder="top speed (MPH)"></BasicInput>
            <BasicInput
              type="text"
              placeholder="acceleration (0-60)"
            ></BasicInput>
            <BasicInput type="text" placeholder="power (BHP)"></BasicInput>
            <BasicInput type="text" placeholder="image 1 (URL)"></BasicInput>
            <BasicInput type="text" placeholder="image 2 (URL)"></BasicInput>
            <BasicInput type="text" placeholder="image 3 (URL)"></BasicInput>
            <BasicInput type="text" placeholder="image 4 (URL)"></BasicInput>
            <BasicInput type="text" placeholder="image 5 (URL)"></BasicInput>
            <BasicInput type="text" placeholder="image 6 (URL)"></BasicInput>
            <BasicInput type="text" placeholder="image 7 (URL)"></BasicInput>
            <BasicInput type="text" placeholder="image 8 (URL)"></BasicInput>
            <BasicInput type="text" placeholder="image 9 (URL)"></BasicInput>
            <BasicInput type="text" placeholder="image 10 (URL)"></BasicInput>
            <BasicInput type="text" placeholder="image 11 (URL)"></BasicInput>
            <BasicInput type="text" placeholder="image 12 (URL)"></BasicInput>
            <BasicInput type="text" placeholder="image 13 (URL)"></BasicInput>
            <BasicInput type="text" placeholder="image 14 (URL)"></BasicInput>
            <BasicInput type="text" placeholder="image 15 (URL)"></BasicInput>
            <BasicInput type="text" placeholder="image 16 (URL)"></BasicInput>
            <BasicInput type="text" placeholder="image 17 (URL)"></BasicInput>
            <BasicInput type="text" placeholder="image 18 (URL)"></BasicInput>
            <BasicInput type="text" placeholder="image 19 (URL)"></BasicInput>
            <BasicInput type="text" placeholder="image 20 (URL)"></BasicInput>
            <BasicInput type="text" placeholder="image 21 (URL)"></BasicInput>
            <BasicInput type="text" placeholder="image 22 (URL)"></BasicInput>
            <BasicInput type="text" placeholder="image 23 (URL)"></BasicInput>
            <BasicInput type="text" placeholder="image 24 (URL)"></BasicInput>
            <BasicInput type="text" placeholder="image 25 (URL)"></BasicInput>
            <BasicInput type="text" placeholder="image 26 (URL)"></BasicInput>
            <BasicInput type="text" placeholder="image 27 (URL)"></BasicInput>
            <BasicInput type="text" placeholder="image 28 (URL)"></BasicInput>
            <BasicInput type="text" placeholder="image 29 (URL)"></BasicInput>
            <BasicInput type="text" placeholder="image 30 (URL)"></BasicInput>
            <BasicInput type="text" placeholder="image 31 (URL)"></BasicInput>
            <BasicInput type="text" placeholder="image 32 (URL)"></BasicInput>
            <BasicInput type="text" placeholder="image 33 (URL)"></BasicInput>
            <BasicInput type="text" placeholder="image 34 (URL)"></BasicInput>
            <BasicInput type="text" placeholder="image 35 (URL)"></BasicInput>
            <BasicInput type="text" placeholder="image 36 (URL)"></BasicInput>
            <BasicInput type="text" placeholder="image 37 (URL)"></BasicInput>
            <BasicInput type="text" placeholder="image 38 (URL)"></BasicInput>
            <BasicInput type="text" placeholder="image 39 (URL)"></BasicInput>
            <BasicInput type="text" placeholder="image 40 (URL)"></BasicInput>
            <button type="submit">Submit</button>
          </form>
        </div>
      </Container>
    </Container>
  );
}
