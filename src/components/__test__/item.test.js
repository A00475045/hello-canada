import { render, screen, fireEvent } from '@testing-library/react';
import Item from '../item';


test('shows capital on button click', () => {
    const testItem = { name: 'Nova Scotia', capital: 'Halifax', flagUrl: 'url' };
    render(<Item {...testItem} />);
    fireEvent.click(screen.getByText('Show Capital'));
    expect(screen.getByText('Halifax')).toBeInTheDocument();
});

test('toggles capital visibility', () => {
    const testItem = { name: 'Nova Scotia', capital: 'Halifax', flagUrl: 'url' };
    render(<Item {...testItem} />);
    const toggleButton = screen.getByText('Show Capital');
    // Capital visible
    fireEvent.click(toggleButton);
    expect(screen.getByText('Halifax')).toBeInTheDocument();
    // Capital invisible
    fireEvent.click(toggleButton);
    expect(screen.queryByText('Halifax')).toBeNull();
});
