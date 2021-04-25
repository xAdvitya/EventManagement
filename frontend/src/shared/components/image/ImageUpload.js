import React,{useRef,useState,useEffect} from 'react'

export const ImageUpload = (props) => {

    const [file,setFile] = useState()
    const [previewUrl,setPreviewUrl] = useState();
    const [isValid,setIsValid] = useState(false);
    const filePickerRef = useRef();
    let pickedFile;
    let fileIsValid = isValid;

    useEffect(()=>{
        if(!file){
            return;
        }
        else{
            const fileReader = new FileReader();
            fileReader.onload = ()=>{
                setPreviewUrl(fileReader.result)
            }
            fileReader.readAsDataURL(file);

        }
    },[file])

    const pickImageHandler = ()=>{
        filePickerRef.current.click();
    };
    
    const pickedHandler = event=>{

        if(event.target.files || event.target.files.length !==0){
            
            const pickedFile = event.target.files[0];
            setFile(pickedFile)
            setIsValid(true);
            fileIsValid = true;
            console.log(pickedFile)
            console.log(previewUrl)
            console.log('no errr')
        }
        else{
            console.log('errrr')
            setIsValid(false)
            fileIsValid = false;
        }
 
        
    }
    return (
        <div>
            <input name="image" className="form-control" id={props.id} onChange={pickedHandler} type="file" style={{display:"none"}} accept=".jpg,.png,.jpeg" ref={filePickerRef}/>

            <div className="container mx-auto d-flex justify-content-center">
                {previewUrl && <img id="image" name="image" className=" mb-3 mt-4 " src={previewUrl} alt="preview" />}
                {!previewUrl && <p> select a image </p>}

            </div>
            <button className="form-control btn btn-primary" type="button" onClick={pickImageHandler}>pick image</button>
        </div>
    )
}
