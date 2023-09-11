export const getPerson = (req, res) => {
  res.status(200).send({ msg: "the person has been found" });
};

export const createPerson = (req, res) => {
  res.status(200).send({ msg: "the person has been created" });
};

export const deletePerson = (req, res) => {
  res.status(200).send({ msg: "the person has been deelted" });
};

export const updatePerson = (req, res) => {
  res.status(200).send({ msg: "the person has been updated" });
};

export const getSinglePerson = (req, res) => {
  res.status(200).send({ msg: "the person has been found by id" });
};
