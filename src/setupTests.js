import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import axios from "axios";
import httpAdapter from "axios/lib/adapters/http";
axios.defaults.adapter = httpAdapter;
configure({ adapter: new Adapter() });
