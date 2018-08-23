import * as React from 'react';

import {ChannelSettingsFormViewArea} from './ChannelSettingsFormView.style';
import {Button, Form, Input} from 'antd';
import {FormComponentProps} from 'antd/lib/form';
import {IChannelSettingsFormViewData} from './interfaces/IChannelSettingsFormViewData';
import {IChannelSettingsFormViewActions} from './interfaces/IChannelSettingsFormViewActions';


const FormItem = Form.Item;


export interface IChannelDetailsViewProps extends FormComponentProps {
    data: IChannelSettingsFormViewData;
    actions: IChannelSettingsFormViewActions;
}

const ChannelSettingsForm = (props: IChannelDetailsViewProps) => {

    const {getFieldDecorator} = props.form;

    return (
        <ChannelSettingsFormViewArea>
            <Form onSubmit={props.actions.submitChannelSettingsForm}>
                <FormItem
                    label='Название канала'
                >
                    {getFieldDecorator('channelLabel', {
                        initialValue: props.data.channelSettings.label,
                        rules: [{
                            type: 'channelLabel', message: 'The input is not valid E-mail!',
                        }, {
                            required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <Input/>
                    )}
                </FormItem>

                <FormItem>
                    <Button type='primary' htmlType='submit'>Сохранить</Button>
                </FormItem>

            </Form>

        </ChannelSettingsFormViewArea>);
};

export const ChannelSettingsFormView = Form.create<IChannelDetailsViewProps>()(ChannelSettingsForm);
