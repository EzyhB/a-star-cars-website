import React, {
  SyntheticEvent,
  useState,
  DragEvent,
  useCallback,
  MouseEvent,
} from "react";
import { Container } from "../components/styles/Container";
import { uuid } from "uuidv4";

import css from "../styles/add-car.module.css";
import BasicInput from "../components/styles/BasicInput";
import ButtonHollow from "../components/styles/ButtonHollow";

export default function AddCar() {
  const [previewImages, setPreviewImages] = useState<File[]>([]);

  const handleSubmit = (event: SyntheticEvent) => {};

  const handleDrop = useCallback((event: DragEvent<HTMLDivElement>) => {
    // This is called when one or more images are dropped on the component
    event.preventDefault();
    const form = event.dataTransfer as DataTransfer;
    const images = Array.from(form.files);

    if (images.length > 0 && images.length <= 40) {
      // Show the images in the preview
      console.log(images);
      setPreviewImages(images);
    } else {
      // Handle error - either no images were dropped or too many were dropped
    }
  }, []);

  const moveImageUp = (index: number) => {
    // This function moves an image up in the preview
    const images = [...previewImages];

    // For example, by swapping it with the previous image in the array:
    [images[index - 1], images[index]] = [images[index], images[index - 1]];
    setPreviewImages(images);
  };

  const moveImageDown = (index: number) => {
    // This function moves an image down in the preview
    const images = [...previewImages];

    // For example, by swapping it with the next image in the array:
    [images[index + 1], images[index]] = [images[index], images[index + 1]];
    setPreviewImages(images);
  };

  function removeImage(index: number) {
    // This function removes an image from the preview
    // For example, by splicing it out of the array:
    const images = [
      ...previewImages.slice(0, index),
      ...previewImages.slice(index + 1),
    ];
    setPreviewImages(images);
  }

  // async function convertPngToJpeg(pngImage: File): Promise<File> {
  //   const image = new Image();
  //   image.src = URL.createObjectURL(pngImage);

  //   return new Promise<File>((resolve, reject) => {
  //     image.onload = async () => {
  //       const canvas = document.createElement("canvas");
  //       canvas.width = image.width;
  //       canvas.height = image.height;

  //       const context = canvas.getContext("2d");

  //       if (context) {
  //         context.drawImage(image, 0, 0, image.width, image.height);

  //         canvas.toBlob(
  //           async (blob) => {
  //             const jpegImage = blob
  //               ? new File(
  //                   [blob],
  //                   `${pngImage.name.replace(".png", ".jpeg")}`,
  //                   {
  //                     type: "image/jpeg",
  //                     lastModified: Date.now(),
  //                   }
  //                 )
  //               : null;

  //             if (jpegImage) {
  //               resolve(jpegImage);
  //             } else {
  //               reject(new Error("Failed to convert image to JPEG"));
  //             }
  //           },
  //           "image/jpeg",
  //           0.9
  //         );
  //       }
  //     };

  //     image.onerror = () => {
  //       reject(new Error("Failed to load image"));
  //     };
  //   });
  // }

  // async function convertPngArrayToJpeg(pngArray: File[]): Promise<File[]> {
  //   const jpegArray = [];

  //   for (const pngImage of pngArray) {
  //     if (pngImage.type === "image/png") {
  //       const jpegImage = await convertPngToJpeg(pngImage);
  //       jpegArray.push(jpegImage);
  //     } else {
  //       jpegArray.push(pngImage);
  //     }
  //   }

  //   return jpegArray;
  // }

  const saveImagesToS3 = async (ID: string) => {
    const formData = new FormData();

    // const imageArray = await convertPngArrayToJpeg(previewImages);
    previewImages.forEach((image) => formData.append("images[]", image));

    console.log("FDFDFD", Array.from(formData));

    // Save the images to the S3 server
    const ImageResponse = await fetch(
      `http://localhost:3001/api/v1/images/${ID}`,
      {
        method: "POST",

        body: formData,
      }
    );

    const postedData = await ImageResponse.json();
    console.log(postedData);
  };

  const saveNewCar = async (event: SyntheticEvent) => {
    const ID = uuid();
    const URL = `${process.env.POSTGRES_BACKEND}/${ID}`;

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
    };

    saveImagesToS3(ID);

    const data = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });
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

            <div
              onDrop={handleDrop}
              onDragOver={(event) => event.preventDefault()}
            >
              Drop your images here to upload them
              <div>
                {previewImages.map((image, index) => {
                  const imageUrl = URL.createObjectURL(image);
                  return (
                    <div key={index}>
                      <img
                        src={imageUrl}
                        alt={image.name}
                        onLoad={() => URL.revokeObjectURL(imageUrl)}
                      />
                      <div>{image.name}</div>
                      <button
                        onClick={(e: MouseEvent<HTMLButtonElement>) => {
                          e.preventDefault();
                          moveImageUp(index);
                        }}
                      >
                        Move Up
                      </button>
                      <button
                        onClick={(e: MouseEvent<HTMLButtonElement>) => {
                          e.preventDefault();
                          moveImageDown(index);
                        }}
                      >
                        Move Down
                      </button>
                      <button
                        onClick={(e: MouseEvent<HTMLButtonElement>) => {
                          e.preventDefault();
                          removeImage(index);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  );
                })}
              </div>
              <button
                onClick={(e: MouseEvent<HTMLButtonElement>) => {
                  e.preventDefault();
                  // saveImagesToDatabase(lol);
                }}
              >
                Save Images
              </button>
            </div>

            <ButtonHollow size="xl" type="submit">
              Submit
            </ButtonHollow>
          </form>
        </div>
      </Container>
    </Container>
  );
}
