import Person from "./personModel";

export const getPerson = async (req, res) => {
  try {
    const person = await Person.find();

    request.status(200).json(person);
  } catch (error) {
    res.status(200).send({ msg: error.message });
  }
};

export const createPerson = async (req, res) => {
  const { name } = req.body;

  try {
    const newPerson = new Person({
      name,
    });

    const savedPerson = await newPerson.save();

    res.status(200).json(savedPerson);
  } catch (error) {
    res.status(200).send({ msg: error.message });
  }
};

export const deletePerson = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPerson = await Person.findOneAndDelete({ _id: id });

    res.status(200).json(deletedPerson);
  } catch (error) {
    res.status(200).send({ msg: "the person has been deelted" });
  }
};

export const updatePerson = async (req, res) => {
  const { id } = req.params;

  const { name } = req.body;

  const data = {
    name,
  };

  try {
    const updated = Person.findOneAndUpdate({ _id: id }, data);

    res.status(200).json(updated);
  } catch (error) {
    res.status(200).send({ msg: "the person has been updated" });
  }
};

export const getSinglePerson = (req, res) => {
  const { id } = req.params;

  try {
    const person = Person.findOne({ _id: id });

    res.status(200).json(person);
  } catch (error) {
    res.status(200).send({ msg: error.message });
  }
};
