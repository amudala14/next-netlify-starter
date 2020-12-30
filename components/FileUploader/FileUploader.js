import React, { useState } from "react";
import ReactDOM from "react-dom";
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginFileValidateSize, FilePondPluginFileValidateType);

function FileUploader() {
  const [files, setFiles] = useState([]);
  const notes = [
    {note: "Accepted Formats", details: "csv" },
    {note: "Maximum size", details: "25 MB" },
    {note: "Minimum size", details: "1 MB" },
  ]
  return (
    <div >
      <form action="#">
        <div className="fileUploaderSection">
          <FilePond
            files={files}
            allowReorder={true}
            allowMultiple={true}
            allowFileTypeValidation={true}
            maxFileSize={'25MB'}
            minFileSize={'1MB'}
            acceptedFileTypes={['application/vnd.ms-excel', 'application/csv', '.csv']}
            labelFileTypeNotAllowed='Only .csv files are allowed.'
            onupdatefiles={setFiles}
            labelIdle='Drag & Drop your files <br/> <small class="d-block mb-20">Only .csv files are accepted.</small><br/><span class="filepond--label-action mt-20">Browse files</span>'
          />

          <div className="uploadFileNoteBlock">
            <h4>Notes:</h4>
            <div>
              {
                notes.map((el, i) => (
                  <p key={i}>
                    <span className="d-block fw-600">{ el.note }</span>
                    <span className="bold-italic-text">{ el.details }</span>
                  </p>
                ))
              }
              
              <a href="/assets/data.csv">Download File Template</a>
            </div>
          </div>
        </div>
        <div className="form-button--container mt-30">
          <button className="formbtn">Save</button>
        </div>
      </form>
    </div>
  );
}
export default FileUploader