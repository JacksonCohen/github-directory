import React, { Fragment, Component } from 'react';
import { useModal } from '../../hooks';
import updateBio from '../../lib/updateBio';

import {
  Avatar,
  Bio,
  BioEditor,
  BioField,
  Container,
  Edit,
  Exit,
  NameField,
  ProfileFields,
  Save,
  Username
} from './styles';

class Modal extends Component<{}, { editMode: boolean; bio: string }> {
  constructor(props: any) {
    super(props);

    this.state = {
      editMode: false,
      bio: ''
    };
    // const { hideUserModal } = useModal();

    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      bio: `I love coding! JavaScript and React are my favorite. When I'm not coding, you can catch me traveling or playing ukulele.`
    });
  }

  toggleEdit(): void {
    this.setState({
      editMode: !this.state.editMode
    });
  }

  handleChange(e: any): void {
    this.setState({
      bio: e.target.value
    });
  }

  render() {
    const { bio, editMode } = this.state;

    return (
      <Container>
        <Avatar src='https://avatars3.githubusercontent.com/u/36962434?v=4' />
        <ProfileFields>
          <NameField>Username</NameField>
          <Username>
            JacksonCohen
            {/* {username} */}
          </Username>
          <BioField>
            Bio
            <Edit src='/assets/pencil-icon.png' onClick={this.toggleEdit} />
          </BioField>
          <Bio>
            {editMode ? (
              <Fragment>
                <BioEditor value={bio} onChange={this.handleChange} />
                <Save>Save</Save>
              </Fragment>
            ) : (
              `I love coding! JavaScript and React are my favorite. When I'm not coding, you can catch me traveling or playing ukulele.`
            )}
            {/* {bio} */}
          </Bio>
        </ProfileFields>
        {/* <Exit onClick={() => hideUserModal()}>&times;</Exit> */}
      </Container>
    );
  }
}

// const Modal = () => {
//   const { hideUserModal } = useModal();

//   return (
//     <Container>
//       <Avatar src='https://avatars3.githubusercontent.com/u/36962434?v=4' />
//       <ProfileFields>
//         <NameField>Username</NameField>
//         <Username>
//           JacksonCohen
//           {/* {username} */}
//         </Username>
//         <BioField>
//           Bio
//           <Edit src='/assets/pencil-icon.png' />
//         </BioField>
//         <Bio>
//           I love coding! JavaScript and React are my favorite. When I'm not coding, you can catch me
//           traveling or playing ukulele.
//           {/* {bio} */}
//         </Bio>
//       </ProfileFields>
//       <Exit onClick={() => hideUserModal()}>&times;</Exit>
//     </Container>
//   );
// };

export default Modal;
