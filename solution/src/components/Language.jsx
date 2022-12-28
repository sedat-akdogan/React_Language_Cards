import { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Language = ({ name, img, options }) => {
     const [showImage, setShowImage] = useState(true);
     return (
          <Container 
               style={{ background: "peachpuff" }}
               className="p-4 rounded-4 h-100 lang-card"
               onClick={() => setShowImage( !showImage )} 
               type="button"
          >

               { showImage && (
                    <Container>
                         <Image className="lang-logo" src={img} width="70%" ></Image>
                         <h3 className="display-6">{ name }</h3>
                    </Container>
               )}

               { !showImage && (
                    <ol>
                         {options.map((item) => {
                              return <li className="h5 text-start">{item}</li>;
                         })}
                    </ol>
               )}
          </Container>
     );
};

export default Language;