import { Typography, ImageList, ImageListItem } from "@mui/material";

import images from './assets/images.json'
import SessionTitle from "./SessionTitle";

function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  
const Gallery = () => {
    return ( <div>
        <SessionTitle>Gallery</SessionTitle>
        <ImageList
            sx={{ width: 280, height: 300 }}
            variant="quilted"
            cols={4}
            rowHeight={121}
        >
            { images.map((image) => (
                <ImageListItem key={image.img} cols={image.cols || 1} rows={image.rows || 1}>
                        <img 
                            {...srcset(image.img, 121, image.rows, image.cols)} 
                            alt={image.title}
                            loading="lazy" 
                        />
                </ImageListItem>
            ))}
        </ImageList>
    </div> );
}
 
export default Gallery;