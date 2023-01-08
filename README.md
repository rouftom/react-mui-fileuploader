<p style="text-align: center;"><a href="" target="_blank"><img alt="" style="text-align: center;" src="public/preview.png"></a></p>

<h1 style="text-align: center;">🗃️ React Material Fileuploader</h1>
<p style="text-align: center;">developed with <a target="_blank" href="https://mui.com">@mui v5</a> </p>

<p style="text-align: center;">
  <img alt="MIT license" src="https://img.shields.io/badge/license-MIT-blue.svg">
  <img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/rouftom/react-mui-fileuploader">
  <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/rouftom/react-mui-fileuploader">
  <img alt="Snyk Vulnerabilities for GitHub Repo" src="https://img.shields.io/snyk/vulnerabilities/github/rouftom/react-mui-fileuploader">
</p>

---

React mui fileuploader is a React component based on @mui v5 that allows you to upload files with an awesome ui component.

## [DEMO](https://eb6ie7.csb.app/)

## 🚀 Installation

```nodejs
  npm install react-mui-fileuploader
```

## 💻 Usage

```javascript 
const handleFileUploadError = (error) => {
  // Do something...
}

const handleFilesChange = (files) => {
  // Do something...
  setUploadedFiles([...files]);
}

return (
  <FileUpload 
    getBase64={false}
    multiFile={true}
    disabled={false}
    title="My awesome file uploader"
    header="[Drag to drop]"
    leftLabel="or"
    rightLabel="to select files"
    buttonLabel="click here"
    buttonRemoveLabel="Remove all"
    maxFileSize={10}
    maxUploadFiles={0}
    maxFilesContainerHeight={357}
    acceptedType={'image/*'}
    errorSizeMessage={'fill it or remove it to use the default error message'}
    allowedExtensions={['jpg', 'jpeg']}
    onFilesChange={handleFilesChange}
    onError={handleFileUploadError}
    imageSrc={'path/to/custom/image'}
    BannerProps={{ elevation: 0, variant: "outlined" }}
    showPlaceholderImage={true}
    PlaceholderGridProps={{ md: 4 }}
    LabelsGridProps={{ md: 8 }}
    onContextReady={context => {
      // access to component context here
    }}
    ContainerProps={{
      elevation: 0,
      variant: "outlined",
      sx: { p: 1 }
    }}
    PlaceholderImageDimension={{
      xs: { width: 128, height: 128 },
      sm: { width: 128, height: 128 },
      md: { width: 164, height: 164 },
      lg: { width: 256, height: 256 }
    }}
  />
)
```

## 🎨 Possible application

```javascript
import React, { useState } from "react"
import { createRoot } from "react-dom/client"
import FileUpload from "react-mui-fileuploader"

function MuiFileUploader() {
  const [filesToUpload, setFilesToUpload] = useState([])

  const handleFilesChange = (files) => {
    // Update chosen files
    setFilesToUpload([ ...files ])
  };

  const uploadFiles = () => {
    // Create a form and post it to server
    let formData = new FormData()
    filesToUpload.forEach((file) => formData.append("files", file))

    fetch("/file/upload", {
      method: "POST",
      body: formData
    })
  }

  return (
    <>
      <FileUpload
        multiFile={true}
        onFilesChange={handleFilesChange}
        onContextReady={(context) => {}}
      />
      <button onClick={uploadFiles}>Upload</button>
    </>
  )
}

const root = createRoot(document.getElementById("root"))
root.render(<MuiFileUploader />)
```

[![Edit react-mui-fileuploader example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/thirsty-visvesvaraya-r9u6ho?fontsize=14&hidenavigation=1&theme=dark)

## Data structure

| Name 	|  Type 	|   Required	|  Details 	|  
|------	|---	|---	|---	|
|    getBase64  	|  `boolean` 	|  `false` 	|  Get the original input files. Default value  `false` 	|
|    multiFile  	|  `boolean` 	|  `false` 	|  Multifile support. Default value  `true` 	|
|    title  	|  `string` 	|  `false` 	|  Component title 	|
|    header  	|  `string` 	|  `false` 	|  Banner component big title 	|
|    showPlaceholderImage  	|  `boolean` 	|  `false` 	|   Show or hide placeholder image | 
|    imageSrc  	|  `string` 	|  `false` 	|   Banner image placeholder source path | 
|    imageSrcAlt  	|  `string` 	|  `false` 	|   Banner image placeholder label	|
|    leftLabel  	|  `string` 	|  `false` 	|  Banner left label  | 
|    rightLabel  	|  `string` 	|  `false` 	|  Banner right label 	| 
|    buttonLabel  	|  `string` 	|  `false` 	|  Banner button label 	| 
|    buttonRemoveLabel  	|  `string` 	|  `false` 	|  Remove button label 	| 
|    disabled  	|  `boolean` 	|  `false` 	|  This property enables or disables the component. Default value `false` 	|  
|    maxFileSize  	|  `number` 	|  `false` 	|  Maximum size (in mb) for files to add. Default value `0`. Value `0` means `unlimited size` 	| 
|    maxUploadFiles  	|  `number` 	|  `false` 	|  Maximum files to add. Default to `0`. Value `0` means `unlimited size` 	| 
|    errorSizeMessage  	|  `string` 	|  `false` 	|  Error returned when a file exceeds `maxFileSize` limit 	| 
|    acceptedType  	|  `string` 	|  `false` 	|  Accepted file type. Default value `image/*` 	| 
|    allowedExtensions  	|  `array` 	|  `false` 	|  Array of allowed extensions. For example, you can specify `['jpg', 'jpeg', 'png']`as allowedExtensions 	| 
|    filesContainerHeight  	|  `number` 	|  `false` 	|  Container Height 	| 
|    maxFilesContainerHeight  	|  `number` 	|  `false` 	|  Container max height. Default value `300` 	| 
|    onError  	|  `function` 	|  `false` 	|  Returned error message when error occurs 	| 
|    onFilesChange  	|  `function` 	|  `false` 	|  Event handler returned when files changes 	| 
|    onContextReady  	|  `function` 	|  `false` 	|  Returns the component context api  	| 
|    BannerProps  	|  `object` 	|  `false` 	|  Banner props. Only MUI props are accepted 	| 
|    ContainerProps  	|  `object` 	|  `false` 	|  Container props. Only MUI props are accepted 	| 
|    PlaceholderImageDimension  	|  `object` 	|  `false` 	|  Dimensions (width and height) of the placeholder image. You can specify them in the properties `xs: {width: 64, height: 64}`, `sm: {width: 64, height: 64}`, `md: {width: 64, height: 64}`, `lg: {width: 64, height: 64}`, etc. |
|    PlaceholderGridProps  	|  `object` 	|  `false` 	|  Customize the placeholder Grid `xs`, `sm`, `md`, `lg`, `xl` sizes |
|    LabelsGridProps  	|  `object` 	|  `false` 	|  Customize the labels Grid `xs`, `sm`, `md`, `lg`, `xl` sizes |

## 😁 Authors

- Muller Roufaou ([rouftom](http://github.com/rouftom))


## 🤔 FAQ

* __Where can I find more documentation?__

  This library is a marriage of [@mui](http://mui.com/getting-started/usage/) and a React setup created with [React](https://fr.reactjs.org/). Either one would be a great place to start!


## 🙇‍♂️ Extra

    Do you like this library ? Buy me a coffee or support me with a star on Github

<a href="https://www.buymeacoffee.com/Lnp9rkM" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 40px !important;width: 180px !important;" ></a>

* Btc address: `bc1qettgagenn9nc8ks7ghntjfme96yvvkfhntk774`

* Eth address: `0xB0413d8D0336E263e289A915c383e152155881E0`



## License

### react-mui-fileuploader

MIT License

Copyright (c) 2023 rouftom

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
