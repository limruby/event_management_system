function uploadImage() {

  return (
    <div className="uploadImage">
        
      <form className="mt-4" action="/upload" method="POST" encType="multipart/form-data">
        <div className="form-group">
        <input
  type="file"
  name="multi-files"
  multiple
  id="input-files"
  class="form-control-file border"
/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>


    </div>
  );
}

export default uploadImage;