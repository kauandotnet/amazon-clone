/*
 * VALIDATIONS
 * Object schema validation
 * @see https://github.com/jquense/yup
 */

import * as yup from 'yup';
import { FieldNames } from './enums';
import { capitalCase, pascalCase } from 'change-case';

export const validationSchema = yup.object().shape({
  [FieldNames.EMAIL]: yup.string().email().required().label(pascalCase(FieldNames.EMAIL)),
  [FieldNames.PASSWORD]: yup
    .string()
    .min(5)
    .max(30)
    .required()
    .label(capitalCase(FieldNames.PASSWORD)),
});
