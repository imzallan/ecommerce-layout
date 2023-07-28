'use client';

import { Saira_Stencil_One } from 'next/font/google';
import { styled } from 'styled-components';
import { CartControl } from './cart-control';
import { PrimaryInputWSearchIcon } from './primary-input';

const sairaStencil = Saira_Stencil_One({
	weight: ['400'],
	subsets: ['latin'],
});

interface HeaderProps {}

const TagHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 160px;

	> div {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 24px;
	}
`;

const Logo = styled.a`
	color: var(--logo-color);
	font-weight: 400;
	font-size: 45px;
	line-height: 150%;
`;

export function Header(props: HeaderProps) {
	return (
		<TagHeader>
			<Logo className={sairaStencil.className}>E-Commerce</Logo>
			<div>
				<PrimaryInputWSearchIcon placeholder="Procurando por algo específico?" />
				<CartControl />
			</div>
		</TagHeader>
	);
}
