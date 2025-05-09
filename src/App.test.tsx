import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import { UserProvider } from './contexts/UserContext';

describe('App Component', () => {
  test('renders App component', () => {
    render(
      <UserProvider>
        <App />
      </UserProvider>
    );
    expect(screen.getByText('GitHubers')).toBeInTheDocument();
  });

  test('loads user data from cache', async () => {
    render(
      <UserProvider>
        <App />
      </UserProvider>
    );
    const input = screen.getByPlaceholderText('Quem você está procurando?');
    const button = screen.getByText('Procurar');

    // Simula a busca de um usuário
    fireEvent.change(input, { target: { value: 'testuser' } });
    fireEvent.click(button);

    // Verifica se o usuário é carregado do cache
    await waitFor(() => {
      expect(screen.getByText('testuser')).toBeInTheDocument();
    });
  });

  test('displays error message when user is not found', async () => {
    render(
      <UserProvider>
        <App />
      </UserProvider>
    );
    const input = screen.getByPlaceholderText('Quem você está procurando?');
    const button = screen.getByText('Procurar');

    // Simula a busca de um usuário inexistente
    fireEvent.change(input, { target: { value: 'nonexistentuser' } });
    fireEvent.click(button);

    // Verifica se a mensagem de erro é exibida
    await waitFor(() => {
      expect(screen.getByText('Usuário não encontrado, tente novamente.')).toBeInTheDocument();
    });
  });
}); 