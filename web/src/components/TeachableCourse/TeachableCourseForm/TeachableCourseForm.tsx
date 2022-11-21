import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type {
  EditTeachableCourseById,
  UpdateTeachableCourseInput,
} from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormTeachableCourse = NonNullable<
  EditTeachableCourseById['teachableCourse']
>

interface TeachableCourseFormProps {
  teachableCourse?: EditTeachableCourseById['teachableCourse']
  onSave: (
    data: UpdateTeachableCourseInput,
    id?: FormTeachableCourse['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const TeachableCourseForm = (props: TeachableCourseFormProps) => {
  const onSubmit = (data: FormTeachableCourse) => {
    props.onSave(data, props?.teachableCourse?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormTeachableCourse> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.teachableCourse?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="teachableId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Teachable id
        </Label>

        <NumberField
          name="teachableId"
          defaultValue={props.teachableCourse?.teachableId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="teachableId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default TeachableCourseForm
