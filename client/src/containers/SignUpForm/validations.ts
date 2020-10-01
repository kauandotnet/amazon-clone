/*
 * VALIDATIONS
 * Object schema validation
 * @see https://github.com/jquense/yup
 */

import * as yup from 'yup';
import { FieldNames } from './enums';
import { capitalCase, pascalCase } from 'change-case';

export const validationSchema = yup.object().shape({
  [FieldNames.USERNAME]: yup
    .string()
    .min(4)
    .max(20)
    .required()
    .label(capitalCase(FieldNames.USERNAME)),
  [FieldNames.EMAIL]: yup.string().email().required().label(pascalCase(FieldNames.EMAIL)),
  [FieldNames.PASSWORD]: yup
    .string()
    .min(8)
    .max(30)
    .required()
    .label(capitalCase(FieldNames.PASSWORD)),
  [FieldNames.CONFIRM_PASSWORD]: yup
    .string()
    .min(4)
    .max(30)
    .required()
    .nullable()
    .oneOf([yup.ref(FieldNames.PASSWORD), null], "Passwords don't match")
    .label(capitalCase(FieldNames.CONFIRM_PASSWORD)),
});
