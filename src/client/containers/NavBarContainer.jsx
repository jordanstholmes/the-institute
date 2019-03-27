import { connect } from 'react-redux';
import NavBar from '../components/NavBar';

const mapStateToProps = state => ({
  subModuleTitle: state.video.title,
});

const NavBarContainer = connect(mapStateToProps)(NavBar);

export default NavBarContainer;
