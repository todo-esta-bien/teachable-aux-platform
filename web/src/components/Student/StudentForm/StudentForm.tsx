import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditStudentById, UpdateStudentInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormStudent = NonNullable<EditStudentById['student']>

interface StudentFormProps {
  student?: EditStudentById['student']
  onSave: (data: UpdateStudentInput, id?: FormStudent['id']) => void
  error: RWGqlError
  loading: boolean
}

const StudentForm = (props: StudentFormProps) => {
  const onSubmit = (data: FormStudent) => {
    props.onSave(data, props?.student?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormStudent> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.student?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default StudentForm
