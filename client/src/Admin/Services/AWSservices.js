import ReactS3 from 'react-s3';

const { REACT_APP_accessKeyId, REACT_APP_secretAccessKey } = process.env;

const config = {
  bucketName: 'ana-fernandez',
  albumName: 'demo',
  region: 'eu-west-3',
  accessKeyId: REACT_APP_accessKeyId,
  secretAccessKey: REACT_APP_secretAccessKey
}

export async function awsUpload(file) {
  console.log(REACT_APP_accessKeyId)
  return await ReactS3.upload(file[0], config)
    // try{
    //   const response = await ReactS3.upload(file[0], config)
    //   return response
    // }
    // catch (error) {
    //   console.log(`se ha producido el siguiente error: ${error}`)
    // }
    
}
