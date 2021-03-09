import Mentor_survey from '../models/Mentor_survey';

export async function createMenSurvey(req, res) {
  const { mentor_id, company_id, vote, feedback, preference } = req.body;
  const survey = await Mentor_survey.create(
    {
      mentor_id,
      company_id,
      vote,
      feedback,
      //preference,
    },
    {
      fields: ['mentor_id', 'company_id', 'vote', 'feedback'],
    }
  );
  res.json({ message: 'New Mentor Survey Created', data: survey });
}

export async function getMenSurvey(req, res) {
  const surveys = await Mentor_survey.findAll({
    attributes: [
      'survey_id',
      'vote',
      'mentor_id',
      'company_id',
      'vote',
      'feedback',
      //'preference',
    ],
  });
  res.json({ surveys });
}

export async function deleteMenSurvey(req, res) {
  const { id } = req.params;
  const deleteCount = await Mentor_survey.destroy({
    where: {
      survey_id: id,
    },
  });
  res.json({
    message: 'Mentor Survey Deleted',
    count: deleteCount,
  });
}

export async function updateMenSurvey(req, res) {
  const { id } = req.params;
  const { mentor_id, company_id, vote, feedback, preference } = req.body;

  const survey = await Mentor_survey.findAll({
    attributes: ['mentor_id', 'company_id', 'vote', 'feedback'],
    where: {
      survey_id: id,
    },
  });
  const updatedSurvey = await Mentor_survey.update(
    {
      mentor_id,
      company_id,
      vote,
      feedback,
      //preference,
    },
    {
      where: {
        survey_id: id,
      },
    }
  );
  res.json({
    message: 'Survey Updated Successfully',
    updatedSurvey,
  });
}
export async function getMenSurveyByMentor(req, res) {
  const { id } = req.params;
  const surveys = await Mentor_survey.findAll({
    attributes: ['mentor_id', 'company_id', 'vote', 'feedback'],
    where: {
      mentor_id: id,
    },
  });
  res.json({ surveys });
}

export async function getMenSurveyById(req, res) {
  const { id } = req.params;
  const survey = await Mentor_survey.findOne({
    where: {
      survey_id: id,
    },
  });
  res.json({ survey });
}
