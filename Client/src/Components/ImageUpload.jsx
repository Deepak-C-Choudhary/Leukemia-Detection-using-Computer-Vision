import React from 'react';
import styled from 'styled-components';
import ReactImageFileToBase64 from "react-file-image-to-base64";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Container = styled.div`
    max-width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    align-items: center;
    border: 2px dashed  ${({ theme }) => theme.soft+ '70'};
    border-radius: 12px;
    color: ${({ theme }) => theme.soft};
    padding: 20px;
`;

const Typo = styled.div`
    font-size: 18px;
    font-weight: 600;
`;

const TextBtn = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
`;

const ImageUpload = ({ images, setImages }) => {

    const handleOnCompleted = files => {
        setImages(files);
    };

    const CustomisedButton = ({ triggerInput }) => {
        return (
            <TextBtn onClick={triggerInput}>
                Browse Image
            </TextBtn>
        );
    };

    return (
        <Container>
            {/* Cloud upload icon */}
            <CloudUploadIcon sx={{ fontSize: "100px" }} />
            
            {/* Change Drag & Drop text to white using inline styles */}
            <Typo style={{ color: 'white' }}>Drag & Drop Image(s) here</Typo>
            
            <div style={{ display: "flex", gap: '6px' }}>
                {/* Change the "or" text to white using inline styles */}
                <Typo style={{ color: 'white' }}>or</Typo>
                
                <ReactImageFileToBase64
                    onCompleted={handleOnCompleted}
                    CustomisedButton={CustomisedButton}
                    multiple={true}
                />
            </div>
        </Container>
    );
}

export default ImageUpload;
