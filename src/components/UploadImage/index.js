import React from "react";
import { Grid, Paper, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";


const UploadImage = ({ processImages = () => {} }) => {
  
  const products = useSelector((state) => state.product?.products);
  const onUploadImage = (files) => {
    const fileList = Array.from(files);
    const images = fileList.map((image) => ({
      productCode:
        image?.name?.replace(/\.[^/.]+$/, "").split("_")[1] ||
        image?.name?.replace(/\.[^/.]+$/, "").split("_")[0] ||
        "",
      productName: "",
      productCategory: null,
      imageFile: URL.createObjectURL(image),
      image_name:image.name
    }));

    // console.log(images);
    if(products.length!=0){


      let new_product = products.map((data,j)=>{
          
      })
              // let newb={}
              // newb.id=1
              // newb.imageFile=images[i].imageFile
              // newb.imagesFileName=images[i].image_name

      console.log(new_product,"new product")

    }else{
      // const unique = [...new Set(data.map(item => item.group))]
      let unique_code= images.map((data)=>{return data.productCode}).filter((value, index, self)=>{return self.indexOf(value) === index;})
      let new_images = unique_code.map((data,i)=>{
          return {
            productCode:data,
            productName:"",
            productCategory:null,
            productExisting:"",
            productImages: images.map((data2,j)=>{
                if(data===data2.productCode){
                    return {
                     id:1,
                     imagesFile:data2.imageFile,
                     imagesFileName:data2.image_name
                    }
                }
              }).filter((data)=>{
                if(data!=undefined){
                  return data
                }
              })
         }
      })
      console.log(new_images,"new images")
      processImages(new_images);

    }


    // processImages(images);
  };

  const handleDrop = (e) => {
    e.nativeEvent.preventDefault();
    if (!e) return;
    const files = e.nativeEvent.dataTransfer.files;
    onUploadImage(files);
  };

  const browseFiles = (e) => {
    if (!e) return;
    const files = e.currentTarget.files;
    onUploadImage(files);
    e.target.value = null;
  };

  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <Paper>
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e)}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "normal",
                marginBottom: "1rem"
              }}
            >
              Drag & Drop Images here
            </h3>
            <p
              style={{
                fontSize: "18px",
                fontWeight: "normal",
                marginBottom: "1rem"
              }}
            >
              or
            </p>
            <Button
              size="medium"
              variant="outlined"
              component="label"
              color="primary"
            >
              <input
                type="file"
                accept="image/*"
                multiple
                style={{ display: "none" }}
                onChange={(e) => browseFiles(e)}
              />
              Browse files
            </Button>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default UploadImage;
