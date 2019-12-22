import React, { Fragment, Component } from 'react';
import updateBio from '../../lib/updateBio';
import { User } from '../../interfaces/SetUser.interface';

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
  SaveContainer,
  Username
} from './styles';

class Modal extends Component<
  { user: User; hideUserModal: any },
  { editMode: boolean; bio: string }
> {
  constructor(props: any) {
    super(props);

    this.state = {
      editMode: false,
      bio: ''
    };

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
    const { hideUserModal } = this.props;

    return (
      <Container>
        <Avatar src='https://avatars3.githubusercontent.com/u/36962434?v=4' /* {avatar} */ />
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
                <SaveContainer>
                  <Save onClick={() => updateBio(bio)}>Save</Save>
                </SaveContainer>
              </Fragment>
            ) : (
              `I love coding! JavaScript and React are my favorite. When I'm not coding, you can catch me traveling or playing ukulele.`
            )}
            {/* {bio} */}
          </Bio>
        </ProfileFields>
        <Exit onClick={hideUserModal}>&times;</Exit>
      </Container>
    );
  }
}

export default Modal;
