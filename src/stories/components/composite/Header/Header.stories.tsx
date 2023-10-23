import type { Meta, StoryObj } from '@storybook/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Avatar from '@mui/material/Avatar';
import Header from '.';
import { Box } from '@mui/material';
import { Placeholder } from '../../utils/placeholder';

const meta: Meta<typeof Header> = {
  title: 'Components/Composite/Header',
  component: Header,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

function storyDecorator(width: number): Story {
  return {
    decorators: [
      (Story) => (
        <Box width={`${width}px`}>
          <Story />
        </Box>
      ),
    ],
  };
}

type Story = StoryObj<typeof Header>;

const logo = (
  <Box display='flex' flexDirection='row' alignItems='center'>
    <Placeholder label='Logo' borderRadius={5} width={200} />
  </Box>
);

const leftMenusPlaceHolder = (
  <Box
    display='flex'
    flexDirection='row'
    alignItems='center'
    marginRight={'5px'}
  >
    <FontAwesomeIcon icon={faBars} size='xl' style={{ color: '#ffffff' }} />
  </Box>
);

const rightMenusPlaceHolder = (
  <Box display='flex' flexDirection='row' alignItems='center'>
    <Placeholder label='RM' />
    <Placeholder label='RM' />
    <Avatar />
  </Box>
);

const loginButtonPlaceholder = (
  <Box display='flex' flexDirection='row' alignItems='center'>
    <Placeholder label='Login' borderRadius={5} width={200} />
  </Box>
);

export const Default: Story = {
  args: {
    isLogin: true,
    logo,
    leftMenus: leftMenusPlaceHolder,
    rightMenus: rightMenusPlaceHolder,
    loginButton: loginButtonPlaceholder,
    bgColor: 'primary',
  },
};

export const Mobile: Story = {
  ...storyDecorator(375),
  args: {
    isMobile: true,
    isLogin: true,
    logo,
    leftMenus: leftMenusPlaceHolder,
    rightMenus: rightMenusPlaceHolder,
    loginButton: loginButtonPlaceholder,
    bgColor: 'primary',
  },
};

export const LoginStatus: Story = {
  args: {
    isLogin: true,
    logo,
    leftMenus: leftMenusPlaceHolder,
    rightMenus: rightMenusPlaceHolder,
    loginButton: loginButtonPlaceholder,
    bgColor: 'primary',
  },
};

export const LogoutStatus: Story = {
  args: {
    isLogin: false,
    logo,
    leftMenus: leftMenusPlaceHolder,
    rightMenus: rightMenusPlaceHolder,
    loginButton: loginButtonPlaceholder,
    bgColor: 'primary',
  },
};
