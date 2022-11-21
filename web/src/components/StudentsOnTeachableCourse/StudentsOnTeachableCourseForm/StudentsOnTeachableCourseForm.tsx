import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

import type {
  EditStudentsOnTeachableCourseById,
  UpdateStudentsOnTeachableCourseInput,
} from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormStudentsOnTeachableCourse = NonNullable<
  EditStudentsOnTeachableCourseById['studentsOnTeachableCourse']
>

interface StudentsOnTeachableCourseFormProps {
  studentsOnTeachableCourse?: EditStudentsOnTeachableCourseById['studentsOnTeachableCourse']
  onSave: (
    data: UpdateStudentsOnTeachableCourseInput,
    id?: FormStudentsOnTeachableCourse['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const StudentsOnTeachableCourseForm = (
  props: StudentsOnTeachableCourseFormProps
) => {
  const onSubmit = (data: FormStudentsOnTeachableCourse) => {
    props.onSave(data, props?.studentsOnTeachableCourse?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormStudentsOnTeachableCourse>
        onSubmit={onSubmit}
        error={props.error}
      >
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="studentId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Student id
        </Label>

        <NumberField
          name="studentId"
          defaultValue={props.studentsOnTeachableCourse?.studentId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="studentId" className="rw-field-error" />

        <Label
          name="teachableCourseId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Teachable course id
        </Label>

        <NumberField
          name="teachableCourseId"
          defaultValue={props.studentsOnTeachableCourse?.teachableCourseId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="teachableCourseId" className="rw-field-error" />

        {/* <Label
          name="token"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Token
        </Label>

          <TextField
            name="token"
            defaultValue={props.studentsOnTeachableCourse?.token}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />


        <FieldError name="token" className="rw-field-error" /> */}

        <Label
          name="isActive"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Is active
        </Label>

        <CheckboxField
          name="isActive"
          defaultChecked={props.studentsOnTeachableCourse?.isActive}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="isActive" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default StudentsOnTeachableCourseForm
