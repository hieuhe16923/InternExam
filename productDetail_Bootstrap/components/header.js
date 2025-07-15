document.addEventListener('DOMContentLoaded', function () {
    const headerElement = document.getElementById('header');
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    headerElement.innerHTML = `
        <header>
            <nav class="navbar navbar-expand-lg bg-white border-bottom border-4 border-warning py-2">
                <div class="container">
                    <!-- Logo -->
                    <a class="navbar-brand fw-bold text-warning fs-4" href="#">COMACPRO</a>

                    <!-- Toggle for mobile -->
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <!-- Menu -->
                    <div class="collapse navbar-collapse" id="mainNavbar">
                        <ul class="navbar-nav mx-auto ms-3 mb-2 mb-lg-0 gap-3">
                            <li class="nav-item">
                                <a class="nav-link active custom-active rounded fw-bold" href="#" aria-current="page">Bán</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fw-bold" href="#">Cho thuê</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fw-bold" href="#">Danh mục</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fw-bold" href="#">Blogs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fw-bold" href="#">FAQ</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fw-bold" href="#">Về chúng tôi</a>
                            </li>
                        </ul>

                        <!-- Buttons -->
                        <div class="d-flex align-items-center gap-2" id="auth-buttons">
                            ${isLoggedIn
            ? `
                                    <button class="btn btn-warning fw-semibold d-flex align-items-center px-3">
                                        <i class="bi bi-calendar-plus me-2"></i> Đăng sản phẩm
                                    </button>
                                    <button class="btn btn-warning p-2 d-flex justify-content-center align-items-center rounded">
                                        <i class="bi bi-person-fill"></i>
                                    </button>
                                `
            : `
                                    <a href="/register" class="btn btn-outline-warning fw-semibold">Đăng ký</a>
                                    <a href="/login" class="btn btn-warning fw-semibold">Đăng nhập</a>
                                `
        }
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        `;
});