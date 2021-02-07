import React from 'react';
import Section from './Section';
import data from '../data/data';
import Divider from './Divider';
import SkillSlider from './SkillSlider';

const Sections = () => (
  <>
    <Section data={data.education} />
    <Divider margin />
    <Section data={data.work} />
    <Section data={data.other} />
    <Section data={data.profile} />
    {data.skills.map((item) => (
      <SkillSlider
        skill={item.skill}
        skillLevel={item.skillLevel}
      />
    ))}
  </>
);

export default Sections;
