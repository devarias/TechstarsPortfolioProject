import Company_survey from '../models/Company_survey';

export async function createComSurvey(req, res) {
  try {
    const { mentor_id, company_id, vote, feedback, preference } = req.body;
    const survey = await Company_survey.create(
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
    res.json({ message: 'New Company Survey Created' });
  } catch (error) {
    console.log(error);
  }
}

export async function getComSurvey(req, res) {
  const surveys = await Company_survey.findAll({
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

export async function deleteComSurvey(req, res) {
  const { id } = req.params;
  const deleteCount = await Company_survey.destroy({
    where: {
      survey_id: id,
    },
  });
  res.json({
    message: 'Company Survey Deleted',
    count: deleteCount,
  });
}

export async function updateComSurvey(req, res) {
  const { id } = req.params;
  const { mentor_id, company_id, vote, feedback, preference } = req.body;

  const survey = await Company_survey.findAll({
    attributes: ['mentor_id', 'company_id', 'vote', 'feedback'],
    where: {
      survey_id: id,
    },
  });
  const updatedSurvey = await Company_survey.update(
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
export async function getComSurveyByMentor(req, res) {
  const { id } = req.params;
  const surveys = await Company_survey.findAll({
    attributes: ['mentor_id', 'company_id', 'vote', 'feedback'],
    where: {
      mentor_id: id,
    },
  });
  res.json({ surveys });
}

export async function getComSurveyById(req, res) {
  const { id } = req.params;
  const survey = await Company_survey.findOne({
    where: {
      survey_id: id,
    },
  });
  res.json({ survey });
}
