pragma solidity ^0.5.0;

contract MedBlock {
	address private owner;
	mapping (address => doctor) private doctors;// Doctor Mapping 
	mapping (address => patient) private patients; // Patient mapping
	mapping (address => mapping (address => uint)) private patientToDoctor; // Consider a 2D array with [Patient][Doctor] and the value (uint) id the lenght of the dinamic array,here mapping 
	uint gpos;


	struct patient {
		address id;
		string name;
		string email;
		string contact;
		string patientAddress;
		string report;
		address[] doctor_list;
	}

	struct doctor {
		address id;
		string name;
		string email;
		string contact;
		string clenicAddress;
		address[] patient_list;
	}

	constructor() public {
		owner = msg.sender;
	}

	modifier checkDoctor(address id) {
		doctor memory doc  = doctors[id];
		require(doc.id != address(0x0));
		_;
	}

	modifier checkPatient(address id) {
		patient memory p = patients[id];
		require(p.id > address(0x0));//check if patient exist
		_;
	}

	modifier onlyOwner() {
		require(msg.sender == owner);
		_;
	}

	function getPatient() public view checkPatient(msg.sender) returns(string memory,string memory,string memory,string memory,string memory, address[] memory) {
				patient memory p = patients[msg.sender];
				return (p.name, p.email, p.contact, p.patientAddress,p.report,p.doctor_list);
			}

	function getDoctor() public view checkDoctor(msg.sender) returns(string memory,string memory,string memory,string memory, address[] memory){
				doctor memory d = doctors[msg.sender];
				return (d.name,d.email,d.contact,d.clenicAddress, d.patient_list);
			}


	function setPatient(string memory _name,string memory _email,string memory _contact,string memory _patientAddress, string memory _report) public {
		patient memory pat = patients[msg.sender];
		require(pat.id == address(0x0));
		patients[msg.sender] = patient({id:msg.sender,name:_name,email:_email,contact:_contact,patientAddress:_patientAddress,report:_report,doctor_list:new address[](0)});
	}

	function setDoctor(string memory _name,string memory _email,string memory _contact,string memory _clenicAddress) public {
		doctor memory doc = doctors[msg.sender]; 
		require(doc.id == address(0x0));
		doctors[msg.sender] = doctor({id:msg.sender,name:_name,email:_email,contact:_contact,clenicAddress:_clenicAddress,patient_list:new address[](0)});
	}


	function getPatientInfoForDoctor(address pat) public view checkPatient(pat) checkDoctor(msg.sender) returns(string memory,string memory,string memory,string memory,string memory){
				patient memory p = patients[pat];
				require(patientToDoctor[pat][msg.sender] > 0);
				return (p.name, p.email, p.contact, p.patientAddress,p.report);
			}


	function grantAccessToDoctor(address doctor_id) public checkPatient(msg.sender) checkDoctor(doctor_id) {
      		patient storage p = patients[msg.sender];
      		doctor storage d = doctors[doctor_id];
      		require(patientToDoctor[msg.sender][doctor_id] < 1);
      		uint len = p.doctor_list.push(doctor_id);// new length of array
      		gLen = len;
      		patientToDoctor[msg.sender][doctor_id] = len;
      		d.patient_list.push(msg.sender);
  			}

	

		}



		// "Hargobind","har@email.com","9856321458","Hyd","Noraml"
		// "Aajit","ajit@email.com","9856325874","Hyd"