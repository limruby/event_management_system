const Certificate = ({ user, role }) => {


  function display() {
    var section = [];
    if (user.certificate) {

      for (var i = 0; i < user.certificate.length; i++) {
        const imageBuffer = Buffer.from(user.certificate[0].source.data);
        section.push(
          <li>
            <a download={user.certificate[0].name} href={imageBuffer} title="Download">{user.certificate[0].name}</a>
          </li>
        );
      }
    } else {
      console.log("no data");
    }
    return section;
  }
  return (
    <div className="empty-container">
      {display()}
    </div>

  );
}

export default Certificate;